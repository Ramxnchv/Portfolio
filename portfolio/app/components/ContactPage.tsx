import sgMail from "@sendgrid/mail";
import { revalidatePath } from "next/cache";

export default function ContactPage() {

    async function sendEmail(data: FormData) {
        'use server'

        if (process.env.SENDGRID_API_KEY) {
            sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        }

        const mailData = {
            from: 'RamonRos <ramonros@ucm.es>',
            to: 'ramonros@ucm.es',
            subject: `Formulario de Contacto Web - ${data.get("name")}`,
            text: data.get("message") + " | Enviado por: " + data.get("email"),
            html: `<div>${data.get("message")}</div><p>Enviado por: ${data.get("email")}</p>`
        }

        try { await sgMail.send(mailData) }
        catch (err) {
            console.log(err)
        }
        finally{ revalidatePath("/") }

    }

    return (
        <section className="flex flex-col justify-between items-center" id="contact">
            <div className='flex flex-col items-center h-screen justify-evenly mb-0 sm:mb-48'>
                <h1 className='text-white font-extrabold text-4xl sm:text-5xl lg:text-5xl tracking-tight'>
                    Contacto
                </h1>
                <form className="flex flex-col gap-5 h-[50vh] justify-evenly" action={sendEmail}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name">Nombre</label>
                        <input id="name" name="name" type="text" className="rounded-md text-black" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" type="email" className="rounded-md text-black" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="message">Mensaje</label>
                        <textarea id="message" name="message" className="rounded-md text-black" />
                    </div>
                    <button type="submit" className="bg-gray-800 hover:bg-gray-700 rounded-md py-1">Enviar</button>
                </form>
            </div>
        </section>
    )
}