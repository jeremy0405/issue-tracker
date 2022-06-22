package team29.hoorry.issuetracker.core.member.dto;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class MembersResponse {

	private List<MemberResponse> members;
}
