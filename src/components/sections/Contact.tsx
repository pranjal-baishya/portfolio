import React, { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { motion } from "framer-motion"
import { DefaultTheme, styled } from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  position: rlative;
  z-index: 1;
  align-items: center;
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`
const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const ContactForm = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.primary + 50};
  padding: 24px;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.primary + 20} 0px 4px 24px;
  gap: 12px;
  overflow-y: auto;
`
const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`
const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`
const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`
const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: ${({ theme }) => theme.primary};
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.primary + 99};
    transform: scale(1.02);
  }
`

// New styled components for 3D card effect
const Card3D = styled.div`
  width: 95%;
  max-width: 600px;
  perspective: 1500px;
  margin-top: 28px;
  height: 600px;

  @media (max-width: 768px) {
    height: 650px;
  }

  @media (max-width: 480px) {
    height: 700px;
  }
`

const CardInner = styled.div<{ flipped: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform: ${(props) => (props.flipped ? "rotateY(180deg)" : "rotateY(0)")};
  border-radius: 12px;
`

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 12px;
  overflow: hidden;
`

const CardFront = styled(CardFace)`
  background-color: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.primary + 50};
  box-shadow: ${({ theme }) => theme.primary + 20} 0px 4px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
`

const CardBack = styled(CardFace)`
  background-color: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.primary + 50};
  transform: rotateY(180deg);
  box-shadow: ${({ theme }) => theme.primary + 20} 0px 4px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FrontImage = styled.img`
  width: 75%;
  height: auto;
  max-height: 50%;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
  transition: transform 0.3s ease;

  ${CardFront}:hover & {
    transform: scale(1.05);
  }
`

const FrontTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`

const FrontSubtitle = styled.p`
  font-size: 18px;
  text-align: center;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 24px;
`

const FlipPrompt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  font-size: 16px;

  svg {
    width: 20px;
    height: 20px;
    animation: bounce 1s infinite alternate;
  }

  @keyframes bounce {
    from {
      transform: translateY(-2px);
    }
    to {
      transform: translateY(2px);
    }
  }
`

const Contact = () => {
  const form = useRef<HTMLFormElement>(null)
  const [isFlipped, setIsFlipped] = useState(false)

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    emailjs
      .sendForm(
        "service_dx08h0p",
        "template_2a3z06v",
        form.current as HTMLFormElement
      )
      .then(
        (result) => {
          alert("Message Sent")
          form.current?.reset()
          setIsFlipped(false) // Flip back to front after successful submission
        },
        (error) => {
          alert(error)
        }
      )
  }

  return (
    <Container id="Contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          Feel free to reach out to me for any questions or opportunities!
        </Desc>

        <Card3D>
          <CardInner flipped={isFlipped}>
            {/* Front of card */}
            <CardFront
              onClick={() => setIsFlipped(true)}
              as={motion.div}
              whileHover={{
                boxShadow: `0px 10px 30px -5px rgba(0, 0, 0, 0.3)`,
              }}
            >
              <FrontImage
                src="https://t4.ftcdn.net/jpg/00/88/74/49/360_F_88744916_2d10nlc9o5pYt7maCIQjZyePT7zL6Ujz.jpg"
                alt="Contact Me"
              />
              <FrontTitle>Let's Connect</FrontTitle>
              <FrontSubtitle>
                I'm always open to discussing new projects, creative ideas or
                opportunities to be part of your vision.
              </FrontSubtitle>
              <FlipPrompt>
                <span>Click to contact me</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </FlipPrompt>
            </CardFront>

            {/* Back of card (Contact Form) */}
            <CardBack>
              <ContactForm as="form" ref={form} onSubmit={handelSubmit}>
                <ContactTitle>Email Me 🚀</ContactTitle>
                <ContactInput placeholder="Your Email" name="from_email" />
                <ContactInput placeholder="Your Name" name="from_name" />
                <ContactInput placeholder="Subject" name="subject" />
                <ContactInputMessage
                  placeholder="Message"
                  name="message"
                  rows={4}
                />
                <div style={{ display: "flex", gap: "10px" }}>
                  <ContactButton
                    type="submit"
                    value="Send"
                    style={{ flex: 3 }}
                  />
                  <ContactButton
                    type="button"
                    value="Back"
                    style={{
                      flex: 1,
                      background: "transparent",
                      border: `1px solid ${({
                        theme,
                      }: {
                        theme: DefaultTheme
                      }) => theme.primary}`,
                    }}
                    onClick={(e) => {
                      e.preventDefault()
                      setIsFlipped(false)
                    }}
                  />
                </div>
              </ContactForm>
            </CardBack>
          </CardInner>
        </Card3D>
      </Wrapper>
    </Container>
  )
}

export default Contact
