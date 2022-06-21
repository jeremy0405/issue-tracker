package team29.hoorry.issuetracker.core.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import org.springframework.web.servlet.HandlerInterceptor;
import team29.hoorry.issuetracker.core.jwt.JwtConst;
import team29.hoorry.issuetracker.core.jwt.JwtValidator;

@AllArgsConstructor
public class UserValidateInterceptor implements HandlerInterceptor {

	private static final String NO_TOKEN_MESSAGE = "토큰이 존재하지 않습니다.";
	private static final String INVALID_TOKEN_MESSAGE = "토큰이 유효하지 않습니다.";

	private final JwtValidator jwtValidator;

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
		throws Exception {
		String token = request.getHeader(JwtConst.AUTHORIZATION);

		if (token == null) {
			response.sendError(HttpServletResponse.SC_UNAUTHORIZED, NO_TOKEN_MESSAGE);
			return false;
		}
		if (!jwtValidator.validate(token)) {
			response.sendError(HttpServletResponse.SC_UNAUTHORIZED, INVALID_TOKEN_MESSAGE);
			return false;
		}

		return true;
	}
}
