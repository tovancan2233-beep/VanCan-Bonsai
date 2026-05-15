import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { accessToken } = await request.json();

    // Xác thực token với API của Pi Network
    const piResponse = await fetch('https://api.minepi.com/v2/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    if (!piResponse.ok) {
      return NextResponse.json({ error: 'Invalid Pi Access Token' }, { status: 401 });
    }

    const piUserData = await piResponse.json();

    // Trả về thông tin người dùng cho ứng dụng
    return NextResponse.json({
      uid: piUserData.uid,
      username: piUserData.username,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
