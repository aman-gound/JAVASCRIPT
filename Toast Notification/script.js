const buttons = document.querySelectorAll(".buttons .btn");
const notification = document.querySelector(".notification");

const toastDetails = {
  success: {
    icon: "fa-circle-check",
    text: "This is a success toast",
  },
  error: {
    icon: "fa-circle-xmark",
    text: "This is an error toast",
  },
  warning: {
    icon: "fa-triangle-exclamation",
    text: "This is a warning toast",
  },
  info: {
    icon: "fa-circle-info",
    text: "This is an info toast",
  }
};

const createToast = (id) => {
  const { icon, text } = toastDetails[id];

  const toast = document.createElement("li");
  toast.className = `toast ${id}`;

  toast.innerHTML = `
    <div class="column">
      <i class="fa-solid ${icon}"></i>
      <span>${text}</span>
    </div>
    <i class="fa-solid fa-xmark close"></i>
  `;

  toast.querySelector(".close").addEventListener("click", () => {
    toast.remove();
  });

  notification.appendChild(toast);
  setTimeout(() => toast.remove(), 50000);
};

buttons.forEach(btn => {
  btn.addEventListener("click", () => createToast(btn.id));
});
