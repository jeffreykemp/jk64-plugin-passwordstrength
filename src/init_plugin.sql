function init
  (p_dynamic_action in apex_plugin.t_dynamic_action
  ,p_plugin         in apex_plugin.t_plugin)
  return apex_plugin.t_dynamic_action_render_result is
  l_result      apex_plugin.t_dynamic_action_render_result;
  l_too_short_msg varchar2(4000) := p_plugin.attribute_01;
  l_score_0_msg   varchar2(4000) := p_plugin.attribute_02;
  l_score_1_msg   varchar2(4000) := p_plugin.attribute_03;
  l_score_2_msg   varchar2(4000) := p_plugin.attribute_04;
  l_score_3_msg   varchar2(4000) := p_plugin.attribute_05;
  l_score_4_msg   varchar2(4000) := p_plugin.attribute_06;
  l_show_feedback_warning     varchar(1) := p_dynamic_action.attribute_01;
  l_show_feedback_suggestions varchar(1) := p_dynamic_action.attribute_02;
  l_minimum_password_length   varchar2(20) := p_dynamic_action.attribute_03;
begin
  apex_plugin_util.debug_dynamic_action
    (p_plugin         => p_plugin
    ,p_dynamic_action => p_dynamic_action);
  apex_javascript.add_library
    (p_name                  => 'password_estimator'
    ,p_directory             => p_plugin.file_prefix
    ,p_check_to_add_minified => true
    );
  apex_css.add_file
    (p_name                  => 'password_estimator'
    ,p_directory             => p_plugin.file_prefix);
  l_result.javascript_function := 'password_estimator.init';
  l_result.attribute_01 := l_too_short_msg;
  l_result.attribute_02 := l_score_0_msg;
  l_result.attribute_03 := l_score_1_msg;
  l_result.attribute_04 := l_score_2_msg;
  l_result.attribute_05 := l_score_3_msg;
  l_result.attribute_06 := l_score_4_msg;
  l_result.attribute_07 := l_show_feedback_warning;
  l_result.attribute_08 := l_show_feedback_suggestions;
  l_result.attribute_09 := l_minimum_password_length;
  return l_result;
end init;