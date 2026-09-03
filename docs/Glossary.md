# 术语表

- **playfield**: 游戏区域，通常由10列20行的 cell 组成的网格（grid）。

- **field frame**: playfield 左侧、右侧、底边的框架，用于限制 descending piece 的可移动和可旋转的区域。

- **skyline**: 游戏可视 playfield 的顶端；piece 从 skyline 中间落下（descend）。

- **top out**: 表示玩家

- **piece**: 玩家可操作的游戏最小单位。

- **block**: 也称mino，是piece 基本组成单位，一个 piece 由多个 block 组成。

- **cell**: 方格，playfield 的基本组成单位。

- **line**: 连线，表示一行 cell 被 block 占满，此时 line complete，line 随即被消除（clear）。

- **gridline**: 网格线，将 playfield 分为多个 cell 的辅助视觉线

- **shadow**: 阴影，表示当前 piece 预期落点位置的辅助视觉元素。

- **polyomino**: 多联骨牌，A polyomino is a piece made of two or more square blocks, where all blocks are connected through full coincident edges (as if squares on graph paper).

    - A free polyomino is one that may be translated (moved about), rotated, or reflected.
    - A one-sided polyomino is one that may be translated or rotated.
    - A fixed polyomino can only be translated.

    Polyominoes come in several sizes:

    - 1 block makes a monomino (or monamino or monimino)
    - 2 blocks make a domino: (or dimino) featured in Dr. Mario and Puyo Pop; seen in Tetris Blast and Tetris Party.
    - 3 blocks make a tromino (or trimino or triomino): featured in Columns (fixed I only) and Pac-Attack (L only); seen in Tetris Blast and Tetris Party (I, L) and Puyo Pop Fever (L only).
    - 4 blocks make a tetromino (or tetramino or tetrimino), featured in all versions of Tetris and most clones. Lumines uses only O tetrominoes.
    - 5 blocks make a pentomino (or pentimino), featured in Daedalian Opus; seen in Tetris 2 + Bombliss and Puyo Puyo Tetris (only I).
    - 6 blocks make a hexomino (or heximino)
