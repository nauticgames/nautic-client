import React from "react";
import Icon from "@mdi/react";
import { mdiEmail } from "@mdi/js";

const Contact = () => {
  return (
    <section className="contact__section wrapped" id="contact">
      <Icon path={mdiEmail} size={2} color="#505050" />
      <h2>contact@nauticgames.com</h2>
    </section>
  );
};

export default Contact;
