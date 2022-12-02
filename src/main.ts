import app from './app'

const PORT = 8000

app.listen(PORT, (): void => {
  console.log(`Server Running here 👉 https://localhost:${PORT}`)
})
