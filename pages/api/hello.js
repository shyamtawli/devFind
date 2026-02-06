// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: "John Doe" });
// }

export default function handler(req, res) {
  res.status(200).json({
    message: "Backend is working",
    method: req.method,
  });
}
