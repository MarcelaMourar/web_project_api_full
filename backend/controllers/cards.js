Card.findById(cardId)
  .then((card) => {
    if (!card) return res.status(404).send({ message: 'Card não encontrado' });
    if (card.owner.toString() !== req.user._id) {
      return res.status(403).send({ message: 'Não permitido' });
    }
    return card.deleteOne().then(() => res.send({ message: 'Card deletado' }));
  })
  .catch(next);