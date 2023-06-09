package io.renren.common.utils;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PageParamObject {
    String t;
    int curPage;
    int pageSize;
    String Search;
}
