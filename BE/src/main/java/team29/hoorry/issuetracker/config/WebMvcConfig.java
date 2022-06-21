package team29.hoorry.issuetracker.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import team29.hoorry.issuetracker.core.interceptor.UserValidateInterceptor;
import team29.hoorry.issuetracker.core.jwt.JwtValidator;

@Configuration
@RequiredArgsConstructor
public class WebMvcConfig implements WebMvcConfigurer {

	private final JwtValidator jwtValidator;

	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(new UserValidateInterceptor(jwtValidator))
			.addPathPatterns("/**")
			.excludePathPatterns("/api/auth", "/api/members", "/api/members/re-issue-token");
	}
}
