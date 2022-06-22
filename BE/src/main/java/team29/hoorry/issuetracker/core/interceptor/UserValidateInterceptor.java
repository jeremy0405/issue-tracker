package team29.hoorry.issuetracker.core.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import org.springframework.web.servlet.HandlerInterceptor;
import team29.hoorry.issuetracker.core.exception.EmptyTokenException;
import team29.hoorry.issuetracker.core.exception.ExceptionMessage;
import team29.hoorry.issuetracker.core.exception.InvalidTokenException;
import team29.hoorry.issuetracker.core.jwt.JwtConst;
import team29.hoorry.issuetracker.core.jwt.JwtValidator;

@AllArgsConstructor
public class UserValidateInterceptor implements HandlerInterceptor {

	private final JwtValidator jwtValidator;

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
		throws Exception {
		// Swagger 관련 요청 제외
		String uri = request.getRequestURI();
		if (uri.contains("swagger") || uri.contains("api-docs") || uri.contains("webjars")) {
			return true;
		}

		String token = request.getHeader(JwtConst.AUTHORIZATION);

		if (token == null) {
			throw new EmptyTokenException(ExceptionMessage.NO_TOKEN_MESSAGE);
		}

		if (!jwtValidator.validate(token)) {
			throw new InvalidTokenException(ExceptionMessage.INVALID_TOKEN_MESSAGE);
		}

		return true;
	}
}
