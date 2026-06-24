export const metadata = {
  title: '月狐星網總部',
  description: '月月女王的專屬星網基地',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#0f172a' }}>
        {children}
      </body>
    </html>
  )
}
