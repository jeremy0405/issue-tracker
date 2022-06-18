package team29.hoorry.issuetracker.core.member.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import team29.hoorry.issuetracker.core.common.BaseTimeEntity;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Entity
public class Member extends BaseTimeEntity {

	@Id
	@Column(name = "member_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(unique = true, nullable = false)
	private String loginId;

	@Column(nullable = false)
	private String loginPassword;

	@Column(nullable = false)
	private String name;

	@Column(nullable = false)
	private String email;

	@Column(length = 1000, nullable = false)
	private String profileImageUrl;

	@Column(unique = true)
	private Long oauthId;

	public static Member of(String loginId, String loginPassword, String name, String email,
		String profileImageUrl, Long oauthId) {
		return new Member(null, loginId, loginPassword, name, email, profileImageUrl, oauthId);
	}
}
