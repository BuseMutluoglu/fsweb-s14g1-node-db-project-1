const accountModel = require("./accounts-model");
const yup = require("yup");

const accountSchema = yup.object().shape({
  name: yup.string.min(3, "").max(100, "").required(""),
  budget: yup.number("").min(0, "").max(1000000, "").required(""),
});
exports.checkAccountPayload = async (req, res, next) => {
  try {
    if (req.body && req.body.name) {
      req.body.name = req.body.name.trim();
    }
    await accountSchema.validate(req.body);
  } catch (error) {
    next(error);
  }
  // KODLAR BURAYA
  // Not: Validasyon için Yup(şu an yüklü değil!) kullanabilirsiniz veya kendiniz manuel yazabilirsiniz.
};

exports.checkAccountNameUnique = (req, res, next) => {
  // KODLAR BURAYA
};

exports.checkAccountId = (req, res, next) => {
  // KODLAR BURAYA
};
