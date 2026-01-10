const mongoose = require ('mongoose');
const Card = require ('../models/card');

module.exports.getCards = (req, res, next) => {
  Card.find({})
  .populate('owner')
  .then((cards) => res.send(cards))
  .catch(next);
};

module.exports.createCard = (req, res, next) => {
const {name, link } = req.body;

Card.create({
  name,
  link,
  owner: req.user._id,
})

.then((card)=> res.status(201).send(card))
.catch(next);
};

module.exports.likeCard = ( req,res,next) =>{
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id} },
    { new: true},
  )

  .orFail()
  .then((card) => res.send(card))
  .catch(next);
};

module.exports.disLikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )

  .orFail()
  .then((card) => res.send(card))
  .catch(next);
};



Card.findById(cardId)
  .then((card) => {
    if (!card) return res.status(404).send({ message: 'Card não encontrado' });
    if (card.owner.toString() !== req.user._id) {
      return res.status(403).send({ message: 'Não permitido' });
    }
    return card.deleteOne().then(() => res.send({ message: 'Card deletado' }));
  })
  .catch(next);