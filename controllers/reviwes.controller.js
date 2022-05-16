//Models
const { Reviwes } = require('../models/reviwes.modal');

// Utils
const { catchAsync } = require('../utils/catchAsync');


const getAllReviwes = catchAsync(async (req, res, next) => {

    const review = Reviwes.findAll({ where: { status: 'active' } });

    res.status(200).json({ review });
});

const createReviwes = catchAsync(async (req, res, next) => {

    const { comment, restaurantId } = req.body;
    //const { reviweId } = res.params;
    const { sessionUser } = req;

    const newReviwes = await Reviwes.create({
        comment,
        restaurantId,
        userId: sessionUser.id
    });

    res.status(200).json({ newReviwes });

});

const getReviwesById = catchAsync(async (req, res, next) => {
    const { review } = req;

    res.status(200).json({ review });
});

const updateReviwes = catchAsync(async (req, res, next) => {
    const { review } = req;
    const { comment } = req.body;

    await review.update({ comment });

    res.status(200).json({ status: 'success' });
});

const deleteReviwes = catchAsync(async (req, res, next) => {
    const { review } = req;

    await review.update({ status: 'deleted' });

    res.status(200).json({ status: 'success' });

});


module.exports = {
    getAllReviwes,
    createReviwes,
    getReviwesById,
    updateReviwes,
    deleteReviwes,
}