package team29.hoorry.issuetracker.core.jwt;

import java.util.HashSet;
import java.util.Set;
import org.springframework.stereotype.Repository;

@Repository
public class JwtRepository {

	private Set<RefreshToken> store = new HashSet<>();

	public boolean save(RefreshToken token) {
		return store.add(token);
	}

	public boolean isValidToken(RefreshToken token) {
		return store.contains(token);
	}
}
