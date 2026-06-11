import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,

        private_key:
          process.env.GOOGLE_PRIVATE_KEY?.replace(
            /\\n/g,
            "\n"
          ),
      },

      scopes: [
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,

      range: "mails!A:C",

      valueInputOption: "USER_ENTERED",

      requestBody: {
        values: [
          [
            body.name,
            body.email,
            new Date().toLocaleString(),
          ],
        ],
      },
    });

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}