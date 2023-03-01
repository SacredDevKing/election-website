/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 100427
 Source Host           : localhost:3306
 Source Schema         : project_database

 Target Server Type    : MySQL
 Target Server Version : 100427
 File Encoding         : 65001

 Date: 28/02/2023 10:22:32
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tbl_candidates
-- ----------------------------
DROP TABLE IF EXISTS `tbl_candidates`;
CREATE TABLE `tbl_candidates`  (
  `id` int(11) NOT NULL,
  `event_id` int(11) NOT NULL,
  `candi_no` int(11) NOT NULL COMMENT 'Number (Auto Increment)',
  `candi_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'Candidate Name',
  `candi_campaign` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'Candidate Campaign',
  `candi_photo` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'Candidate Photo',
  `vote_cnt` int(11) NOT NULL DEFAULT 0 COMMENT 'Vote Count',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tbl_events
-- ----------------------------
DROP TABLE IF EXISTS `tbl_events`;
CREATE TABLE `tbl_events`  (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `open_date` datetime(0) NOT NULL,
  `close_date` datetime(0) NOT NULL,
  `event_banner` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `is_active` int(11) NOT NULL DEFAULT 0 COMMENT '0: Not Actived, 1: Actived',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tbl_users
-- ----------------------------
DROP TABLE IF EXISTS `tbl_users`;
CREATE TABLE `tbl_users`  (
  `username` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `password` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `is_admin` int(11) NOT NULL DEFAULT 0 COMMENT '(0: User, 1: Admin)',
  `activation_code` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `active` int(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 25 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tbl_users
-- ----------------------------
INSERT INTO `tbl_users` VALUES ('admin', 1, '59beecdf7fc966e2f17fd8f65a4a9aeb09d4a3d4', 'admin@admin.com', 1, NULL, NULL);
INSERT INTO `tbl_users` VALUES ('Apollo', 24, '95a8d7da6128535e62cc85d09b0250d41adc7e6e', 'bwolf9791576@gmail.com', 0, NULL, NULL);

-- ----------------------------
-- Table structure for tbl_votes
-- ----------------------------
DROP TABLE IF EXISTS `tbl_votes`;
CREATE TABLE `tbl_votes`  (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `event_id` int(11) NOT NULL,
  `candidate_id` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
