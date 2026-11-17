"""创建完整离线交付包：包含素材和源码，不包含 Git 历史或依赖缓存。"""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
root=Path(__file__).resolve().parent.parent
out=root/'out'/'LapLab-Running-Club-Visual-Identity-完整离线包.zip'
out.parent.mkdir(exist_ok=True)
skip={'.git','node_modules','out','__pycache__','.DS_Store','.env'}
with ZipFile(out,'w',ZIP_DEFLATED,compresslevel=6) as z:
    for p in sorted(root.rglob('*')):
        rel=p.relative_to(root)
        if p.is_file() and not any(part in skip for part in rel.parts):
            z.write(p,Path('LapLab Running Club Visual Identity')/rel)
with ZipFile(out) as z:
    assert z.testzip() is None
    assert sum(n.endswith('.wav') for n in z.namelist())==4
print(out)
