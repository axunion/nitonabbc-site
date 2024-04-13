const boxInput = document.querySelector(".input");
const boxWait = document.querySelector(".wait");
const boxDone = document.querySelector(".done");
const boxFail = document.querySelector(".fail");

type PostResponse = {
  result: "done" | "error";
  error: string;
};

if (boxInput && boxWait && boxDone && boxFail) {
  const postUrl =
    "https://script.google.com/macros/s/AKfycbwVrcTOx7j6Joi6ia4Hpe7IDoq_zPIcl-MM-Sd8QFfVGwuTiMtQfD7AmEQ046UYhGxD/exec";
  const siteKey = "6LemGUgpAAAAAHNy3XuUPkWhP2KZXkp1EfmC5lDh";
  const form = boxInput.querySelector("form");

  form?.addEventListener("submit", async (event: Event) => {
    event.preventDefault();

    const className = "hidden";
    const formData = new FormData(form);
    const postData = Object.fromEntries(formData.entries());

    window.scrollTo(0, 0);
    boxInput.classList.add(className);
    boxWait.classList.remove(className);

    grecaptcha.ready(async () => {
      postData.type = "000000";
      postData.recaptcha = await grecaptcha.execute(siteKey, {
        action: "submit",
      });

      const response = await fetch(postUrl, {
        method: "POST",
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      const responseData: PostResponse = await response.json();

      if (responseData.result === "done") {
        boxDone.classList.remove(className);
      } else if (responseData.result === "error") {
        boxFail.classList.remove(className);
      }

      boxWait.classList.add(className);
    });
  });
}
