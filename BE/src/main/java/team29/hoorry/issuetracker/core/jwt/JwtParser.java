package team29.hoorry.issuetracker.core.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import team29.hoorry.issuetracker.core.exception.EmptyTokenException;
import team29.hoorry.issuetracker.core.exception.ExceptionMessage;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class JwtParser {

	public static <T> T parseClaim(String bearerAuthorization, String claimName, Class<T> requiredType)
		throws JwtException, IllegalArgumentException {
		String token = extractToken(bearerAuthorization);
		Claims claims = Jwts.parserBuilder()
			.setSigningKey(JwtConst.SECRET_KET)
			.build()
			.parseClaimsJws(token)
			.getBody();

		return claims.get(claimName, requiredType);
	}

	private static String extractToken(String bearerAuthorization) {
		if (bearerAuthorization.split(" ").length > 1) {
			return bearerAuthorization.split(" ")[1];
		}
		throw new EmptyTokenException(ExceptionMessage.NO_TOKEN_MESSAGE);
	}
}
