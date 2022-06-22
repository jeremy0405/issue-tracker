package team29.hoorry.issuetracker.core.member;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import team29.hoorry.issuetracker.core.member.domain.Member;

public interface MemberRepository extends JpaRepository<Member, Long> {

	Optional<Member> findByOauthId(Long oauthId);
}
