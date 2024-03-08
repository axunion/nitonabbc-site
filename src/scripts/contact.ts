const boxInput = document.querySelector(".input");
const boxWait = document.querySelector(".wait");
const boxDone = document.querySelector(".done");
const boxFail = document.querySelector(".fail");

type PostResponse = {
  result: "done" | "error";
  error: string;
};

if (boxInput && boxWait && boxDone && boxFail) {
  const form = boxInput.querySelector("form");

  form?.addEventListener("submit", async (event: Event) => {
    event.preventDefault();

    const className = "hidden";
    const formData = new FormData(form);

    window.scrollTo(0, 0);
    boxInput.classList.add(className);
    boxWait.classList.remove(className);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwVrcTOx7j6Joi6ia4Hpe7IDoq_zPIcl-MM-Sd8QFfVGwuTiMtQfD7AmEQ046UYhGxD/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      const responseData: PostResponse = await response.json();

      if (responseData.result === "done") {
        boxDone.classList.remove(className);
      } else if (responseData.result === "error") {
        boxFail.classList.remove(className);
        throw new Error(responseData.error);
      }
    } catch (error) {
      boxWait.classList.add(className);
      boxFail.classList.remove(className);
      console.error(error);
    }
  });
}
