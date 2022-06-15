-- member Table Create SQL
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS member;
DROP TABLE IF EXISTS milestone;
DROP TABLE IF EXISTS issue;
DROP TABLE IF EXISTS label;
DROP TABLE IF EXISTS comment;
DROP TABLE IF EXISTS issue_assignee;
DROP TABLE IF EXISTS issue_label;
DROP TABLE IF EXISTS comment_reaction;
SET FOREIGN_KEY_CHECKS = 1;

CREATE TABLE member
(
    `member_id`         BIGINT      NOT NULL AUTO_INCREMENT,
    `login_id`          VARCHAR(45) NOT NULL COMMENT '로그인 아이디',
    `login_password`    VARCHAR(45) NOT NULL COMMENT '로그인 비밀번호',
    `name`              VARCHAR(45) NOT NULL COMMENT '이름',
    `email`             VARCHAR(45) NOT NULL COMMENT '이메일',
    `profile_image_url` VARCHAR(1000) NULL COMMENT '프로필 사진 경로',
    `created_at`        DATETIME    NOT NULL DEFAULT NOW() COMMENT '생성일시',
    `updated_at`        DATETIME    NOT NULL DEFAULT NOW() COMMENT '수정일시',
    PRIMARY KEY (member_id)
);

-- ALTER TABLE member COMMENT '회원';

CREATE UNIQUE INDEX UQ_member_1
    ON member (login_id, email);


-- milestone Table Create SQL
CREATE TABLE milestone
(
    `milestone_id` BIGINT      NOT NULL AUTO_INCREMENT,
    `title`        VARCHAR(45) NOT NULL,
    `description`  VARCHAR(100) NULL,
    `due_date`     DATETIME NULL,
    PRIMARY KEY (milestone_id)
);

-- ALTER TABLE milestone COMMENT '마일스톤';


-- issue Table Create SQL
CREATE TABLE issue
(
    `issue_id`     BIGINT      NOT NULL AUTO_INCREMENT,
    `title`        VARCHAR(45) NOT NULL COMMENT '제목',
    `writer_id`    BIGINT      NOT NULL COMMENT '작성자 id',
    `milestone_id` BIGINT NULL COMMENT '마일스톤 id',
    `status`       VARCHAR(45) NOT NULL COMMENT '상태(OPEN, CLOSED, DELETED)',
    `created_at`   DATETIME    NOT NULL DEFAULT NOW() COMMENT '생성일시',
    `updated_at`   DATETIME    NOT NULL DEFAULT NOW() COMMENT '수정일시',
    PRIMARY KEY (issue_id)
);

-- ALTER TABLE issue COMMENT '이슈';

ALTER TABLE issue
    ADD CONSTRAINT FK_issue_writer_id_member_member_id FOREIGN KEY (writer_id)
        REFERENCES member (member_id) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE issue
    ADD CONSTRAINT FK_issue_milestone_id_milestone_milestone_id FOREIGN KEY (milestone_id)
        REFERENCES milestone (milestone_id) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- label Table Create SQL
CREATE TABLE label
(
    `label_id`         BIGINT       NOT NULL AUTO_INCREMENT,
    `title`            VARCHAR(100) NOT NULL COMMENT '제목',
    `background_color` VARCHAR(45)  NOT NULL COMMENT '배경색',
    `title_color`      VARCHAR(45)  NOT NULL COMMENT '글자색',
    `description`      VARCHAR(100) NULL COMMENT '설명',
    PRIMARY KEY (label_id)
);

-- ALTER TABLE label COMMENT '라벨';


-- comment Table Create SQL
CREATE TABLE comment
(
    `comment_id` BIGINT         NOT NULL AUTO_INCREMENT,
    `issue_id`   BIGINT         NOT NULL COMMENT '이슈 id',
    `writer_id`  BIGINT         NOT NULL COMMENT '작성자 id',
    `content`    VARCHAR(10000) NOT NULL COMMENT '내용',
    `created_at` DATETIME       NOT NULL DEFAULT NOW() COMMENT '생성일시',
    `updated_at` DATETIME       NOT NULL DEFAULT NOW() COMMENT '수정일시',
    PRIMARY KEY (comment_id)
);

-- ALTER TABLE comment COMMENT '코멘트';

ALTER TABLE comment
    ADD CONSTRAINT FK_comment_issue_id_issue_issue_id FOREIGN KEY (issue_id)
        REFERENCES issue (issue_id) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE comment
    ADD CONSTRAINT FK_comment_writer_id_member_member_id FOREIGN KEY (writer_id)
        REFERENCES member (member_id) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- issue_assignee Table Create SQL
CREATE TABLE issue_assignee
(
    `issue_assignee_id` BIGINT NOT NULL AUTO_INCREMENT,
    `issue_id`          BIGINT NOT NULL COMMENT '이슈 id',
    `assignee_id`       BIGINT NOT NULL COMMENT '담당자 id',
    PRIMARY KEY (issue_assignee_id)
);

-- ALTER TABLE issue_assignee COMMENT '이슈 담당자';

ALTER TABLE issue_assignee
    ADD CONSTRAINT FK_issue_assignee_issue_id_issue_issue_id FOREIGN KEY (issue_id)
        REFERENCES issue (issue_id) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE issue_assignee
    ADD CONSTRAINT FK_issue_assignee_assignee_id_member_member_id FOREIGN KEY (assignee_id)
        REFERENCES member (member_id) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- issue_label Table Create SQL
CREATE TABLE issue_label
(
    `issue_label_id` BIGINT NOT NULL AUTO_INCREMENT,
    `issue_id`       BIGINT NOT NULL COMMENT '이슈 id',
    `label_id`       BIGINT NOT NULL COMMENT '라벨 id',
    PRIMARY KEY (issue_label_id)
);

-- ALTER TABLE issue_label COMMENT '이슈 라벨';

ALTER TABLE issue_label
    ADD CONSTRAINT FK_issue_label_issue_id_issue_issue_id FOREIGN KEY (issue_id)
        REFERENCES issue (issue_id) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE issue_label
    ADD CONSTRAINT FK_issue_label_label_id_label_label_id FOREIGN KEY (label_id)
        REFERENCES label (label_id) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- comment_reaction Table Create SQL
CREATE TABLE comment_reaction
(
    `comment_reaction_id` BIGINT      NOT NULL AUTO_INCREMENT,
    `comment_id`          BIGINT      NOT NULL COMMENT '코멘트 id',
    `member_id`           BIGINT      NOT NULL COMMENT '멤버 id',
    `reaction`            VARCHAR(45) NOT NULL COMMENT '반응',
    PRIMARY KEY (comment_reaction_id)
);

-- ALTER TABLE comment_reaction COMMENT '코멘트 리액션';

ALTER TABLE comment_reaction
    ADD CONSTRAINT FK_comment_reaction_comment_id_comment_comment_id FOREIGN KEY (comment_id)
        REFERENCES comment (comment_id) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE comment_reaction
    ADD CONSTRAINT FK_comment_reaction_member_id_member_member_id FOREIGN KEY (member_id)
        REFERENCES member (member_id) ON DELETE RESTRICT ON UPDATE RESTRICT;
