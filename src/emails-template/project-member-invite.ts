type Args = {
  name: string;
  projectName: string;
  link: string;
};

export const projectMemberInvite = ({
  name,
  projectName,
  link,
}: Args) => `<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head> </head>
  <body
    style="
      background-color: #ffffff;
      margin: auto;
      font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
    "
  >
    <table
      align="center"
      role="presentation"
      cellspacing="0"
      cellpadding="0"
      border="0"
      width="100%"
      style="
        width: 465px;
        max-width: 465px;
        margin: 40px auto;
        border: 1px solid #eaeaea;
        border-radius: 4px;
        padding: 20px;
      "
    >
      <tr style="width: 100%">
        <td>
          <img
            alt="Dashify"
            src="https://relief-hackathon.vercel.app/logo.png"
            width="auto"
            height="50"
            style="
              display: block;
              outline: none;
              border: none;
              text-decoration: none;
              margin: 0 auto;
            "
          />
          <h1
            style="
              color: #000000;
              font-size: 24px;
              text-align: center;
              padding: 0;
              margin: 30px 0;
            "
          >
            You have an invitation
          </h1>

          <p
            style="
              color: #000000;
              font-size: 20px;
              line-height: 24px;
              text-align: center;
            "
          >
            <strong>${name}</strong> has invited you to collaborate on
            the project <strong>${projectName}</strong>
          </p>

          <table
            style="text-align: center"
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            role="presentation"
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <a
                    href=${link}
                    target="_blank"
                    style="
                      background-color: #07D46F;
                      border-radius: 3px;
                      color: #fff;
                      font-size: 16px;
                      text-decoration: none;
                      text-align: center;
                      display: inline-block;
                      p-x: 12px;
                      p-y: 12px;
                      line-height: 100%;
                      max-width: 100%;
                      padding: 12px 12px;
                    "
                    ><span
                      style="
                        background-color: #07D46F;
                        border-radius: 3px;
                        color: #fff;
                        font-size: 16px;
                        text-decoration: none;
                        text-align: center;
                        display: inline-block;
                        p-x: 12px;
                        p-y: 12px;
                        max-width: 100%;
                        line-height: 120%;
                        text-transform: none;
                        mso-padding-alt: 0px;
                        mso-text-raise: 9px;
                      "
                    >
                      Accept invitation</span
                    ></a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
