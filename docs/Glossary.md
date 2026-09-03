# 术语表

![Interface Glossary](<img/Interface Glossary.png>)

## 游戏区域

- **playfield**: 游戏区域，通常由10列40行的 cell 组成的网格（grid），通常 playfield 包含了可视部分和非可视部分。
    - **matrix**: 20行的可视部分，通常是有效游戏区域。
    - **vanish zone**: 20行的非可视部分，大多数游戏通常隐藏21行及以上的 playfield。

- **field frame**: playfield 左侧、右侧、底边的框架，用于限制 descending piece 的可移动和可旋转的区域。

- **skyline**: 游戏可视 playfield 的最顶端的一行，通常是第20行；piece 从 skyline 中间落下（descend）。

## 游戏失败条件

- **block out**: 将要生成的 piece 由于被 matrix 的 existing block 阻挡无法生成。

- **lock out**: 当 piece 完全被 lock down 在 skyline 之上。
   - **lock down**: 锁定，一切 falling piece 着陆（land）在 surface 上后无法一段时间后就无法对 piece 进行操作，通常时间为 0.5s。

- **top out**: 表示放置（place）的方块越过 top out line。
    - **top out line**: playfield 的最上沿，通常是 skyline 之上的第 20 行，也是游戏程序最大可能达到的高度。

## 方块

- **piece**: 碎片，玩家可操作的游戏最小单位，一个 piece 由多个 block 组成。

- **block**: 块，piece 基本组成单位。

- **existing block**: 原有块，即 block 被 lock 在 cell。

- **cell**: 方格，playfield 的基本组成单位。

- **polyomino**: 多联骨牌，A polyomino is a piece made of two or more square blocks, where all blocks are connected through full coincident edges (as if squares on graph paper).

    - A **free polyomino** is one that may be translated (moved about), rotated, or reflected.
    - A **one-sided polyomino** is one that may be translated or rotated.
    - A **fixed polyomino** can only be translated.

    Polyominoes come in several sizes:

    - 1 block makes a monomino (or monamino or monimino)
    - 2 blocks make a domino: (or dimino) featured in Dr. Mario and Puyo Pop; seen in Tetris Blast and Tetris Party.
    - 3 blocks make a tromino (or trimino or triomino): featured in Columns (fixed I only) and Pac-Attack (L only); seen in Tetris Blast and Tetris Party (I, L) and Puyo Pop Fever (L only).
    - 4 blocks make a tetromino (or tetramino or tetrimino), featured in all versions of Tetris and most clones. Lumines uses only O tetrominoes.
    - 5 blocks make a pentomino (or pentimino), featured in Daedalian Opus; seen in Tetris 2 + Bombliss and Puyo Puyo Tetris (only I).
    - 6 blocks make a hexomino (or heximino)

- **surface**: 一切 existing block 的顶部，或 playfield 的底部

- **line**: 连线，单独特指一行 cell 被 block 占满情况，此时 line complete，line 随即被消除（clear）。

## 视觉元素

- **gridline**: 网格线，将 playfield 分为多个 cell 的辅助视觉线

- **shadow**: 阴影，表示当前 piece 预期落点位置的辅助视觉元素。
