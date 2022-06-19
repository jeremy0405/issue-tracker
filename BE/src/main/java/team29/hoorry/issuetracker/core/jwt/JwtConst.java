package team29.hoorry.issuetracker.core.jwt;

import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import java.time.Duration;
import javax.crypto.SecretKey;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class JwtConst {

	public static SecretKey SECRET_KET = Keys.hmacShaKeyFor(Decoders.BASE64.decode(System.getenv("JWT_SECRET_KEY")));
	public static long ACCESS_TOKEN_EXPIRED_TIME = Duration.ofHours(1).toMillis();
	public static final long REFRESH_TOKEN_EXPIRED_TIME = Duration.ofDays(7).toMillis();

}
