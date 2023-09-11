import ContactPageForm from "../components/ContactPage/ContactPageForm"

const ContactPage = () => {
  return (
    <>
      <ContactPageForm
        inquiryTypes={[
          { title: "Message" },
          { title: "Voice" },
          { title: "Aaa" },
          { title: "Bbb" }
        ]}
      />
    </>
  )
}

export default ContactPage
