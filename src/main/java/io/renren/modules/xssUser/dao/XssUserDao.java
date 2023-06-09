package io.renren.modules.xssUser.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import io.renren.modules.xssUser.entity.XssUserEntity;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface XssUserDao extends BaseMapper<XssUserEntity> {
}
