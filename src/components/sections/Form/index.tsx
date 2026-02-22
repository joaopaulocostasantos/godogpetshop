"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

import imgVeterinario from "@/assets/veterinario.png";

export function Form() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setStatus("loading");
    setStatusMessage("");
    // limpar erro de submit anterior
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy.submit;
      return copy;
    });

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      fullname: formData.get("fullname"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
    };

    // validação de campos obrigatórios (erros inline)
    const newErrors: Record<string, string> = {};
    if (!data.fullname || String(data.fullname).trim() === "") {
      newErrors.fullname = "Por favor, preencha o nome completo.";
    }
    if (!data.email || String(data.email).trim() === "") {
      newErrors.email = "Por favor, preencha o email.";
    }
    if (!data.phone || String(data.phone).trim() === "") {
      newErrors.phone = "Por favor, preencha o WhatsApp.";
    }
    if (!data.service || String(data.service).trim() === "") {
      newErrors.service = "Por favor, selecione um serviço.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      setStatus("error");
      setStatusMessage("Por favor, corrija os campos em destaque.");
      return;
    }
    setErrors({});

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      // tenta ler o corpo da resposta (se houver)
      let body: any = null;
      try {
        body = await res.json();
      } catch (err) {
        // ignora se não for JSON
      }

      // debug log temporário (visível apenas no console)
      // eslint-disable-next-line no-console
      console.debug("/api/lead response:", {
        status: res.status,
        ok: res.ok,
        body,
      });

      // se status HTTP não OK => erro
      if (!res.ok) {
        const message = body?.error || body?.message || `HTTP ${res.status}`;
        setErrors({ submit: String(message) });
        setStatus("error");
        setStatusMessage(String(message));
        return;
      }

      // se o body indicar erro (ex: { error: '...' }) tratar como erro
      if (body && (body.error || body?.status === "error")) {
        const message = body.error || body.message || "Erro ao enviar.";
        setErrors({ submit: String(message) });
        setStatus("error");
        setStatusMessage(String(message));
        return;
      }

      // sucesso
      setErrors({});
      setStatus("success");
      setStatusMessage(
        "Obrigado! Recebemos sua solicitação. Entraremos em contato em breve.",
      );
      form.reset();
      // limpa mensagem após alguns segundos
      setTimeout(() => {
        setStatus("idle");
        setStatusMessage("");
      }, 6000);
    } catch (err) {
      setErrors({ submit: "Erro ao enviar. Tente novamente." });
      setStatus("error");
      setStatusMessage("Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.formSection}>
      <div className={styles.imageContainer}>
        <Image
          src={imgVeterinario}
          alt="Imagem de um veterinário"
          className={styles.img}
        />
      </div>
      <div className={styles.formContainer}>
        <span className={styles.formBagde}>Agendamento on-line</span>
        <h2 className={styles.formTitle}>
          Agende um horário para cuidar do seu pet
        </h2>
        <p className={styles.formDescription}>
          Preencha o formulário com seus dados e entraremos em contato para
          confirmar o atendimento.
        </p>
        {status === "success" && (
          <div
            className={styles.modalOverlay}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className={styles.modal}>
              <h3 id="modal-title">Agendamento enviado</h3>
              <p>{statusMessage}</p>
              <div className={styles.modalActions}>
                <button
                  type="button"
                  className={styles.modalClose}
                  onClick={() => {
                    setStatus("idle");
                    setStatusMessage("");
                  }}
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className={styles.form} id="formLead">
          <div>
            <input
              type="text"
              name="fullname"
              placeholder="Nome completo"
              aria-invalid={!!errors.fullname}
              disabled={loading}
            />
            {errors.fullname && (
              <div style={{ color: "#fff", fontSize: 12 }}>
                {errors.fullname}
              </div>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              aria-invalid={!!errors.email}
              disabled={loading}
            />
            {errors.email && (
              <div style={{ color: "#fff", fontSize: 12 }}>{errors.email}</div>
            )}
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="WhatsApp"
              aria-invalid={!!errors.phone}
              disabled={loading}
            />
            {errors.phone && (
              <div style={{ color: "#fff", fontSize: 12 }}>{errors.phone}</div>
            )}
          </div>

          <div>
            <select
              name="service"
              defaultValue=""
              aria-invalid={!!errors.service}
              disabled={loading}
            >
              <option value="" disabled>
                Selecione um serviço
              </option>
              <option value="essencial">Plano Essencial</option>
              <option value="completo">Plano Completo</option>
              <option value="premium">Plano Premium</option>
            </select>
            {errors.service && (
              <div style={{ color: "#fff", fontSize: 12 }}>
                {errors.service}
              </div>
            )}
          </div>

          {errors.submit && (
            <div style={{ color: "#fff", marginBottom: 8 }}>
              {errors.submit}
            </div>
          )}

          {/* debug output removed to avoid exposing raw response to users */}

          <button type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Solicitar agendamento"}
          </button>
        </form>
      </div>
    </section>
  );
}
