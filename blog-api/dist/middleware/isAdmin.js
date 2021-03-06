"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isAdmin = function isAdmin(req, res, next) {
  var token;

  try {
    token = req.get("Authorization").split(" ")[1];
  } catch (err) {
    var error = new Error("Not authenticated.");
    error.statusCode = 401;
    res.status(401).json({
      message: error.message
    });
    throw error;
  }

  var decodedToken;

  try {
    decodedToken = _jsonwebtoken["default"].verify(token, process.env.JWT_SECRET);
  } catch (err) {
    err.statusCode = 500;
    res.status(500).json({
      message: "internal server error"
    });
    throw err;
  }

  if (!decodedToken) {
    var _error = new Error("Not authenticated.");

    res.status(401).json({
      message: _error.message
    });
    _error.statusCode = 401;
    throw _error;
  }

  if (!decodedToken.isOperator) {
    var _error2 = new Error("Access forbidden.");

    _error2.statusCode = 403;
    res.status(_error2.statusCode).json({
      message: _error2.message
    });
    throw _error2;
  }

  req.email = decodedToken.email;
  next();
};

var _default = isAdmin;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlL2lzQWRtaW4udHMiXSwibmFtZXMiOlsiaXNBZG1pbiIsInJlcSIsInJlcyIsIm5leHQiLCJ0b2tlbiIsImdldCIsInNwbGl0IiwiZXJyIiwiZXJyb3IiLCJFcnJvciIsInN0YXR1c0NvZGUiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImRlY29kZWRUb2tlbiIsImp3dCIsInZlcmlmeSIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIiwiaXNPcGVyYXRvciIsImVtYWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBV0MsSUFBWCxFQUFvQjtBQUNsQyxNQUFJQyxLQUFKOztBQUNBLE1BQUk7QUFDRkEsSUFBQUEsS0FBSyxHQUFHSCxHQUFHLENBQUNJLEdBQUosQ0FBUSxlQUFSLEVBQXlCQyxLQUF6QixDQUErQixHQUEvQixFQUFvQyxDQUFwQyxDQUFSO0FBQ0QsR0FGRCxDQUVFLE9BQU9DLEdBQVAsRUFBWTtBQUNaLFFBQU1DLEtBQUssR0FBRyxJQUFJQyxLQUFKLENBQVUsb0JBQVYsQ0FBZDtBQUNBRCxJQUFBQSxLQUFLLENBQUNFLFVBQU4sR0FBbUIsR0FBbkI7QUFDQVIsSUFBQUEsR0FBRyxDQUFDUyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsTUFBQUEsT0FBTyxFQUFFTCxLQUFLLENBQUNLO0FBQWpCLEtBQXJCO0FBQ0EsVUFBTUwsS0FBTjtBQUNEOztBQUNELE1BQUlNLFlBQUo7O0FBQ0EsTUFBSTtBQUNGQSxJQUFBQSxZQUFZLEdBQUdDLHlCQUFJQyxNQUFKLENBQVdaLEtBQVgsRUFBa0JhLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxVQUE5QixDQUFmO0FBQ0QsR0FGRCxDQUVFLE9BQU9aLEdBQVAsRUFBWTtBQUNaQSxJQUFBQSxHQUFHLENBQUNHLFVBQUosR0FBaUIsR0FBakI7QUFDQVIsSUFBQUEsR0FBRyxDQUFDUyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FBckI7QUFDQSxVQUFNTixHQUFOO0FBQ0Q7O0FBQ0QsTUFBSSxDQUFDTyxZQUFMLEVBQW1CO0FBQ2pCLFFBQU1OLE1BQUssR0FBRyxJQUFJQyxLQUFKLENBQVUsb0JBQVYsQ0FBZDs7QUFDQVAsSUFBQUEsR0FBRyxDQUFDUyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsTUFBQUEsT0FBTyxFQUFFTCxNQUFLLENBQUNLO0FBQWpCLEtBQXJCO0FBQ0FMLElBQUFBLE1BQUssQ0FBQ0UsVUFBTixHQUFtQixHQUFuQjtBQUNBLFVBQU1GLE1BQU47QUFDRDs7QUFDRCxNQUFJLENBQUNNLFlBQVksQ0FBQ00sVUFBbEIsRUFBOEI7QUFDNUIsUUFBTVosT0FBSyxHQUFHLElBQUlDLEtBQUosQ0FBVSxtQkFBVixDQUFkOztBQUNBRCxJQUFBQSxPQUFLLENBQUNFLFVBQU4sR0FBbUIsR0FBbkI7QUFDQVIsSUFBQUEsR0FBRyxDQUFDUyxNQUFKLENBQVdILE9BQUssQ0FBQ0UsVUFBakIsRUFBNkJFLElBQTdCLENBQWtDO0FBQUVDLE1BQUFBLE9BQU8sRUFBRUwsT0FBSyxDQUFDSztBQUFqQixLQUFsQztBQUNBLFVBQU1MLE9BQU47QUFDRDs7QUFDRFAsRUFBQUEsR0FBRyxDQUFDb0IsS0FBSixHQUFZUCxZQUFZLENBQUNPLEtBQXpCO0FBQ0FsQixFQUFBQSxJQUFJO0FBQ0wsQ0FoQ0Q7O2VBa0NlSCxPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XG5cbmNvbnN0IGlzQWRtaW4gPSAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgbGV0IHRva2VuO1xuICB0cnkge1xuICAgIHRva2VuID0gcmVxLmdldChcIkF1dGhvcml6YXRpb25cIikuc3BsaXQoXCIgXCIpWzFdO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihcIk5vdCBhdXRoZW50aWNhdGVkLlwiKTtcbiAgICBlcnJvci5zdGF0dXNDb2RlID0gNDAxO1xuICAgIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxuICBsZXQgZGVjb2RlZFRva2VuO1xuICB0cnkge1xuICAgIGRlY29kZWRUb2tlbiA9IGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBlcnIuc3RhdHVzQ29kZSA9IDUwMDtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IFwiaW50ZXJuYWwgc2VydmVyIGVycm9yXCIgfSk7XG4gICAgdGhyb3cgZXJyO1xuICB9XG4gIGlmICghZGVjb2RlZFRva2VuKSB7XG4gICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoXCJOb3QgYXV0aGVudGljYXRlZC5cIik7XG4gICAgcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0pO1xuICAgIGVycm9yLnN0YXR1c0NvZGUgPSA0MDE7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbiAgaWYgKCFkZWNvZGVkVG9rZW4uaXNPcGVyYXRvcikge1xuICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKFwiQWNjZXNzIGZvcmJpZGRlbi5cIik7XG4gICAgZXJyb3Iuc3RhdHVzQ29kZSA9IDQwMztcbiAgICByZXMuc3RhdHVzKGVycm9yLnN0YXR1c0NvZGUpLmpzb24oeyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0pO1xuICAgIHRocm93IGVycm9yO1xuICB9XG4gIHJlcS5lbWFpbCA9IGRlY29kZWRUb2tlbi5lbWFpbDtcbiAgbmV4dCgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNBZG1pbjtcbiJdfQ==