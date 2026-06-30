export const newEnquiry = (name, email, message) => `
<div style="font-family:Arial,Helvetica,sans-serif;background:#f4f4f4;padding:30px;">

    <table
        width="600"
        align="center"
        cellpadding="0"
        cellspacing="0"
        style="background:#fff;border-radius:10px;border:1px solid #e5e7eb;overflow:hidden;"
    >

        <!-- Header -->
        <tr>
            <td style="background:#111827;padding:25px;text-align:center;">
                <h1 style="margin:0;color:#fff;">
                    📩 New Website Enquiry
                </h1>
            </td>
        </tr>

        <!-- Body -->
        <tr>
            <td style="padding:30px;">

                <p style="margin-top:0;color:#374151;font-size:15px;">
                    You have received a new enquiry from your portfolio website.
                </p>

                <table width="100%" cellpadding="8" cellspacing="0">

                    <tr>
                        <td style="font-weight:bold;width:120px;">Name</td>
                        <td>${name}</td>
                    </tr>

                    <tr>
                        <td style="font-weight:bold;">Email</td>
                        <td>
                            <a href="mailto:${email}">
                                ${email}
                            </a>
                        </td>
                    </tr>

                    <tr>
                        <td style="font-weight:bold;">Received</td>
                        <td>${new Date().toLocaleString()}</td>
                    </tr>

                </table>

                <hr style="margin:25px 0;border:none;border-top:1px solid #e5e7eb;">

                <h3 style="margin-bottom:10px;color:#111827;">
                    Message
                </h3>

                <div
                    style="
                        background:#f9fafb;
                        padding:20px;
                        border-left:4px solid #2563eb;
                        line-height:1.7;
                        color:#374151;
                        white-space:pre-wrap;
                    "
                >
${message}
                </div>

                <div style="margin-top:30px;text-align:center;">
                    <a
                        href="mailto:${email}"
                        style="
                            display:inline-block;
                            background:#2563eb;
                            color:#fff;
                            text-decoration:none;
                            padding:12px 24px;
                            border-radius:6px;
                            font-weight:bold;
                        "
                    >
                        Reply to ${name}
                    </a>
                </div>

            </td>
        </tr>

        <!-- Footer -->
        <tr>
            <td
                style="
                    background:#f9fafb;
                    padding:20px;
                    text-align:center;
                    color:#6b7280;
                    font-size:13px;
                "
            >
                This email was automatically generated from your portfolio contact form.
            </td>
        </tr>

    </table>

</div>
`;