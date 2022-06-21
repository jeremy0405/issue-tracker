package team29.hoorry.issuetracker.core.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

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
		return bearerAuthorization.split(" ")[1];
	}
}
