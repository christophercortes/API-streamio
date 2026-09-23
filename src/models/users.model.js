'use strict';

// Allows send data to the front-end

function userResponse(user) {
    return {
        id: user.id,
        fullName: user.fullName,
        userEmail: user.userEmail,
        userPhone: user.userPhone,
        userAddress: user.userAddress,
        lastLogin: user.lastLogin,
        createdDate: user.createdDate,
        updatedDate: user.updatedDate,
    }
};

module.exports = { userResponse, };