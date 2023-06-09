package io.renren.modules.xssUser.service;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.IService;
import io.renren.common.utils.PageParamObject;
import io.renren.modules.xssUser.entity.XssUserEntity;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public interface XssUserService extends IService<XssUserEntity> {
    public Page<XssUserEntity> getPage(PageParamObject param);
}
