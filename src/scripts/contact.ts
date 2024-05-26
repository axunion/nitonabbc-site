const boxInput = document.querySelector(".input");
const boxWait = document.querySelector(".wait");
const boxDone = document.querySelector(".done");
const boxFail = document.querySelector(".fail");

type PostResponse = {
  result: "done" | "error";
  error: string;
};

if (boxInput && boxWait && boxDone && boxFail) {
  const POST_URL =
    "https://script.google.com/macros/s/AKfycbwVrcTOx7j6Joi6ia4Hpe7IDoq_zPIcl-MM-Sd8QFfVGwuTiMtQfD7AmEQ046UYhGxD/exec";
  const SITE_KEY = "6LemGUgpAAAAAHNy3XuUPkWhP2KZXkp1EfmC5lDh";
  const CLASS_NAME = "hidden";
  const form = boxInput.querySelector("form");

  form?.addEventListener("submit", async (event: Event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const postData = Object.fromEntries(formData.entries());

    window.scrollTo(0, 0);
    boxInput.classList.add(CLASS_NAME);
    boxWait.classList.remove(CLASS_NAME);

    grecaptcha.ready(async () => {
      postData.type = "000000";
      postData.recaptcha = await grecaptcha.execute(SITE_KEY, {
        action: "submit",
      });

      const response = await fetch(POST_URL, {
        method: "POST",
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      const responseData: PostResponse = await response.json();

      if (responseData.result === "done") {
        boxDone.classList.remove(CLASS_NAME);
      } else if (responseData.result === "error") {
        boxFail.classList.remove(CLASS_NAME);
      }

      boxWait.classList.add(CLASS_NAME);
    });
  });
}
