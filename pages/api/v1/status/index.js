function status(request, response) {
  response.status(200).json({ chave: "Vai pra cima, Fogão!" });
}

export default status;
