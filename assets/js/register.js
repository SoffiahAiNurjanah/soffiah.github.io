if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    this.navigator.serviceWorker
      .register("/service-worker.js")
      .then(res => console.log("service worker berhasil"))
      .catch(err => console.log("service worker gagal", err))
  })
}