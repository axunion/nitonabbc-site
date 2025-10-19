import { RECAPTCHA_SITE_KEY } from "@/consts";

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string },
      ) => Promise<string>;
    };
  }
}

export class ReCaptchaError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ReCaptchaError";
  }
}

export async function getReCaptchaToken(action = "submit"): Promise<string> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") {
      const error = new ReCaptchaError("window object is not available (SSR)");
      console.error(error.message);
      reject(error);
      return;
    }

    if (!window.grecaptcha) {
      const error = new ReCaptchaError("reCAPTCHA script not loaded");
      console.error(error.message);
      reject(error);
      return;
    }

    if (!RECAPTCHA_SITE_KEY) {
      const error = new ReCaptchaError("reCAPTCHA site key not configured");
      console.error(error.message);
      reject(error);
      return;
    }

    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(RECAPTCHA_SITE_KEY, { action })
        .then((token) => {
          if (!token) {
            reject(new ReCaptchaError("reCAPTCHA token is empty"));
            return;
          }
          resolve(token);
        })
        .catch((error: unknown) => {
          const err = error instanceof Error ? error : new Error(String(error));
          reject(new ReCaptchaError(`reCAPTCHA execution failed: ${err.message}`));
        });
    });
  });
}
