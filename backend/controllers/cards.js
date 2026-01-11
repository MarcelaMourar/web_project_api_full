const mongoose = require ('mongoose');
const Card = require ('../models/card');
const ForbiddenError = require ('../errors/ForbiddenError');
const NotFoundError = require ('../errors/NotFoundError');

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



module.exports.deleteCard = (req, res, next) => {
  const { cardId } = req.params;
  const userId = req.user._id;

  Card.findById(cardId)
    .orFail(() => {
      throw new NotFoundError('Card não encontrado');
    })
    .then((card) => {
     if (card.owner.toString() !== userId) {
        throw new ForbiddenError('Você não tem permissão para deletar este card');
      }

      return card.deleteOne();
    })
    .then(() => res.send({ message: 'Card deletado com sucesso' }))
    .catch(next);
};