import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: Response) {
    const { email, subject, message } = await req.json();
    const fromEmail: string | any = process.env.FROM_EMAIL;
    console.log(email, subject, message)
    try {
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: [fromEmail],
            subject: subject,
            html: `<p> Email: ${email} </p> <p> Subject: ${subject} </p> <p> Message: ${message} </p>`
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
