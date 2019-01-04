class NotArrayError extends TypeError {}
NotArrayError.prototype.name = "NotArrayError";
class NotNumericArrayError extends TypeError {}
NotNumericArrayError.prototype.name = "NotNumericArrayError";
class NotNumericParamsError extends TypeError {}
NotNumericParamsError.prototype.name = "NotNumericParamsError";

module.exports = {
  NotArrayError,
  NotNumericArrayError,
  NotNumericParamsError
};
