package team29.hoorry.issuetracker.core.member;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import team29.hoorry.issuetracker.core.member.domain.Member;
import team29.hoorry.issuetracker.core.member.dto.MemberRequest;

@Service
@RequiredArgsConstructor
@Transactional
public class MemberService {

	private MemberRepository memberRepository;

	public Long join(MemberRequest memberRequest) {
		Member member = MemberRequest.toEntity(memberRequest);
		memberRepository.save(member);
		return member.getId();
	}
}
