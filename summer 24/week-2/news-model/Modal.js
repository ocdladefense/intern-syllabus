

import * as bootstrap from "bootstrap";

export default class Modal {
  constructor(config) {
    // Any initialization that should be passed around here or to bootstrap.
    this.prefix = config.prefix; // could be "article" or "summary"

    // Get a reference to what will be the modal's container.
    this.$modal = document.querySelector("#modal");

    // Our modal has three parts.
    // ... or does it?
    // Seems like it just has one part which is the body.
    this.$header = document.querySelector("#modal #ModalHeader");
    this.$body = document.querySelector("#modal #ModalBody");
    this.$footer = document.querySelector("#modal #ModalFooter");

    this.modal = new bootstrap.Modal(this.$modal);
  }

  // Set the content of the modal.
  // Should be called before show().
  content(html) {
    this.$body.innerHTML = html;
  }

  open() {
    this.modal.open();
  }

  close() {
    this.modal.close();
  }
}