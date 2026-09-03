# 贡献指引

## AI 使用政策

- 代码仅允许使用 LLM 对话和行内代码自动补全功能。

## Commit Message 格式

采用 Conventional Commits 规范格式

```
<type>(<scope>): <subject>
[optional body]
[optional footer]
```

type：
- feat：新功能
- fix：修复 bug
- docs：文档更新
- style：代码格式调整
- refactor：重构（既非新功能也非修复）
- perf：提升代码性能
- test：增加或修改测试
- build：影响构建系统或外部依赖
- chore：不涉及 src 和 test 的修改
- revert：恢复先前提交

示例：
```
feat(auth): add JWT token validation

- Implement middleware for token verification
- Add unit tests for auth service

Closes #42
```
