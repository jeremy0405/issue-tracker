package team29.hoorry.issuetracker.core.member.domain;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import team29.hoorry.issuetracker.core.common.embeddable.DateTimeTracker;

@Entity
public class Member {

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

	@Embedded
	private DateTimeTracker dateTimeTracker;
}
