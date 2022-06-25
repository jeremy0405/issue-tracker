package team29.hoorry.issuetracker.core.issue.dto.response;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import team29.hoorry.issuetracker.core.issue.domain.CommentReaction;
import team29.hoorry.issuetracker.core.member.dto.MemberResponse;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ReactionResponse {

	@Getter
	@NoArgsConstructor
	@AllArgsConstructor
	static class ReactionAndMember {

		private String emoji;
		private List<MemberResponse> members;
	}

	private List<ReactionAndMember> reaction = new ArrayList<>();

	public static ReactionResponse from(List<CommentReaction> reactions) {
		Map<String, List<MemberResponse>> test = new HashMap<>();
		for (CommentReaction reaction : reactions) {
			String emoji = reaction.getReaction().getEmoji();

			if (!test.containsKey(emoji)) {
				test.put(emoji, new ArrayList<>());
			}
			test.get(emoji).add(MemberResponse.from(reaction.getMember()));
		}

		List<ReactionAndMember> reaction = new ArrayList<>();
		test.forEach((k, v) -> reaction.add(new ReactionAndMember(k, v)));
		return new ReactionResponse(reaction);
	}
}
